import { AuthService } from './../../services/auth.service';
import { mongoCollections } from './../../constants/collection.constants';
import { Component, OnInit, AfterViewInit } from '@angular/core';

import { FocusMonitor } from '@angular/cdk/a11y';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  collections: string[];
  username: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private focusMonitor: FocusMonitor) { }

  ngOnInit() {
    this.collections = mongoCollections;
    this.authService.getUser()
      .subscribe((response: any) => {
        this.username = response.username;
      });
  }

  ngAfterViewInit() {
    this.focusMonitor.stopMonitoring(document.getElementById('collectionMenu'));
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
