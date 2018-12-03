import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { NPMService } from '../../services/npm.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit, OnDestroy {
  private npm$: Observable<any>;
  private npmSubscription: Subscription;
  private npm: any;
  constructor(private npmService: NPMService) {
    this.npm$ = npmService.getPackageDownloads();
  }

  ngOnInit() {
    this.npmSubscription = this.npm$
      .subscribe(data => {
        let sums = data;
        this.npm = sums.reduce((a, b) => ({ downloads: a.downloads + b.downloads }));
      });
  }

  private viewGitHub(): void {
    window.open("https://github.com/cambronjay", "_blank");
  }

  private viewPortfolio(): void {
    window.open("http://jaycambron.com", "_blank");
  }

  private viewNPM(): void {
    window.open("https://www.npmjs.com/~cambronjay", "_blank");
  }
  ngOnDestroy() {
  
    this.npmSubscription.unsubscribe();
  }
}
