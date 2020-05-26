import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyPages, PAGES } from '../assets/page-data'

@Component({
  selector: 'app-static-page',
  templateUrl: './static-page.component.html',
  styleUrls: ['./static-page.component.css']
})
export class StaticPageComponent implements OnInit {
page;
pages: MyPages[] = PAGES;

  constructor(
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
    this.page = this.pages.find(p => p.slug == params.get('slug'));
  });
  console.log(this.page);
  }

}