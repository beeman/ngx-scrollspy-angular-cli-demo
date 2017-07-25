import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { ActivatedRoute } from '@angular/router'
import 'rxjs/add/operator/map'

import { PageService } from '../page.service'

@Component({
  selector: 'app-dynamic',
  styleUrls: [ '../page.component.scss' ],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-9" role="main">
          <div class="main" [scrollSpyIndex]="{id: pageId, selector: 'anchor'}">
            <div [innerHtml]="safeMarkup(content)"></div>
            <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
          </div>
        </div>
        <div class="col-md-3" role="complementary">
          <scrollSpy-index-render
            [scrollSpyIndexRenderOptions]="{id: pageId, spyId: 'window', topMargin: 90}"
            [scrollSpyAffix]="{topMargin: 70, bottomMargin: 70}"
            class="hidden-print hidden-xs hidden-sm">
          </scrollSpy-index-render>
        </div>
      </div>
    </div>
  `,
})
export class DynamicComponent implements OnInit {

  public pageId = ''
  public content = ''

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private pageService: PageService,
  ) { }

  safeMarkup(markup: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(markup);
  }

  ngOnInit() {
    this.route.data
      .map(i => i.pageId)
      .subscribe(pageId => this.updatePage(pageId))
  }

  updatePage(pageId) {
    this.pageId = pageId
    this.content = this.pageService.getPage(pageId)
  }


  public goTo(anchor: string) {
    setTimeout(() => {
      (<any>document).querySelector('#' + anchor).scrollIntoView();
    });
  }

}
