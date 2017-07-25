import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: [ '../page.component.scss' ],
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-9" role="main">
          <div class="main" [scrollSpyIndex]="{id: 'home', selector: 'anchor'}">
            <div>
              <h2 id="home" class="anchor">Home</h2>
              <p>Aenean ac orci in quam sodales rhoncus. Nam cursus massa a ultrices fermentum. Integer vel velit eu
                lacus dictum feugiat vitae molestie libero. Mauris venenatis, magna ac tincidunt aliquam, ex massa
                accumsan est, ut convallis sapien risus sit amet magna. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in
                faucibus. In facilisis turpis enim, quis rutrum arcu vehicula sit amet. Vestibulum nulla dolor,
                vulputate non magna ac, congue lacinia augue. Aenean pulvinar, ante luctus venenatis rutrum, erat sem
                consectetur eros, eu posuere enim tellus semper metus. Fusce cursus, dolor non efficitur tempor, neque
                lectus mollis lectus, ut mollis libero sapien ut orci. Vivamus posuere convallis ullamcorper. Phasellus
                ac dolor sit amet dui consectetur tincidunt dignissim id velit. Suspendisse accumsan varius nulla, sit
                amet vestibulum est luctus sit amet. Morbi vehicula tellus eu odio lacinia elementum. In hac habitasse
                platea dictumst.</p>
              <p>Phasellus scelerisque quam mi, id vulputate mi interdum quis. Nulla facilisi. Praesent rutrum malesuada
                posuere. Suspendisse dapibus est ut pulvinar placerat. Mauris eu velit fermentum, facilisis felis non,
                molestie ligula. Maecenas luctus, dolor id pharetra pretium, lacus odio vestibulum tortor, a ullamcorper
                est eros nec diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras eu dui quis augue
                faucibus elementum a ut quam. Nulla tempus placerat orci, at tristique quam congue nec. Vivamus
                condimentum a mi sed efficitur. In vel pretium nibh. Nulla eget dui a sapien ultrices hendrerit. Vivamus
                malesuada aliquet leo.</p>
              <h3 id="services" class="anchor">Services</h3>
              <p>Mauris malesuada tortor nec leo ultrices efficitur. Nam fermentum tellus sodales, mattis diam eu,
                porttitor felis. Mauris rutrum dui justo, id vestibulum elit porttitor non. In nec pellentesque ante,
                sed iaculis nisi. Praesent tempor congue est, nec molestie nisi. Duis eu gravida neque. Mauris egestas
                tellus in est convallis laoreet. Sed ut sagittis ante.</p>
              <p>Suspendisse sit amet nisl augue. Maecenas commodo tellus non odio dictum viverra. Aenean ante elit,
                lacinia et nulla quis, venenatis blandit ex. Aliquam erat volutpat. Donec arcu nisl, molestie nec ligula
                et, venenatis vestibulum leo. Suspendisse egestas placerat erat, quis convallis velit ultrices vitae.
                Pellentesque neque odio, maximus non nulla id, fringilla interdum magna. Nam iaculis eget risus vel
                varius. Phasellus vestibulum tellus at quam tincidunt, ut commodo nulla eleifend. Vivamus in sem at
                lectus vehicula tempus. Maecenas mollis imperdiet libero non dignissim. Nullam nec cursus tellus. Proin
                vulputate consequat turpis vitae feugiat. Mauris vitae rutrum mauris.</p>
              <h3 id="clients" class="anchor">Clients</h3>
              <p>Suspendisse sed suscipit arcu. Duis vitae aliquam mauris, nec consectetur felis. Praesent tincidunt
                magna et est pellentesque condimentum. Aenean placerat in eros id rutrum. Cras rutrum ut est eget
                bibendum. Nunc mollis, mauris eget vestibulum facilisis, tellus metus venenatis metus, et maximus quam
                magna at augue. Vestibulum a enim rhoncus, laoreet sem sed, ornare urna. In tempus pulvinar gravida. Sed
                sit amet justo quam. Curabitur lacus massa, viverra quis lacinia ut, maximus sit amet massa. Class
                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque
                congue nisl eget enim aliquam, et ornare magna malesuada. Duis vel aliquet odio. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.</p>
              <p>Cras rutrum, neque sit amet hendrerit gravida, elit risus ullamcorper lorem, vitae efficitur ex tellus
                eget dolor. Fusce mollis fringilla sem sed hendrerit. Curabitur leo risus, laoreet ac luctus
                ullamcorper, ultricies a odio. Integer hendrerit suscipit ante, ac congue augue mattis quis.
                Pellentesque vitae quam nec arcu congue rutrum vel sed velit. Donec imperdiet rhoncus est. Etiam odio
                ligula, viverra nec nisl quis, faucibus vulputate massa. Aenean sit amet lacus at metus pellentesque
                pretium. Sed sit amet hendrerit lectus. Mauris laoreet lacinia pharetra. Vivamus pretium gravida ex at
                ultricies.</p>
              <h2 id="about" class="anchor">About Us</h2>
              <p>Mauris semper tortor gravida, dapibus sem vitae, venenatis est. Donec dapibus ornare diam, at dignissim
                diam feugiat quis. In mi ligula, euismod in lorem eget, pulvinar auctor elit. Ut ut neque vitae eros
                consectetur finibus et at libero. Cras mollis felis eu tortor dictum dictum ac nec justo. Maecenas
                mattis rhoncus porta. Pellentesque tempor est in efficitur maximus. Morbi eget porta est, a aliquam
                elit. Aliquam in vehicula orci. Aliquam erat volutpat. Vivamus lacinia mauris orci, non commodo neque
                lobortis quis. Cras in consequat risus. Donec in mi a ligula blandit tempor ut in urna. Orci varius
                natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi quis odio dignissim,
                faucibus arcu eget, vehicula arcu. Nam aliquet neque et fringilla sollicitudin.</p>
              <p>Donec iaculis ligula ac diam tincidunt faucibus. Vestibulum ante ipsum primis in faucibus orci luctus
                et ultrices posuere cubilia Curae; Curabitur ac imperdiet velit. Sed ac efficitur sapien. In porta eu
                tortor eget mollis. Mauris venenatis laoreet consectetur. Vestibulum at libero arcu. Nam non justo
                risus. Integer sed arcu et velit accumsan interdum sit amet a sem. Etiam non imperdiet leo, id pretium
                tellus. Etiam quis est imperdiet, venenatis dolor ut, condimentum ante. Etiam at ipsum ligula. Donec
                ullamcorper nunc nisi, non elementum quam auctor vel. Donec vitae enim metus. Praesent sit amet eleifend
                nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
              <h3 id="contact" class="anchor">Contact</h3>
              <p>Maecenas in lectus mauris. Nam molestie aliquet orci vitae faucibus. Suspendisse dictum euismod massa.
                Fusce vulputate tortor id hendrerit porta. In pellentesque eget ipsum et molestie. Phasellus venenatis
                magna in odio egestas, commodo semper orci fermentum. Morbi ultricies sagittis faucibus.</p>
              <p>Aenean congue, urna quis posuere finibus, ante dui pretium nisi, sed imperdiet quam tortor ac tellus.
                Integer eleifend nisl ut elit ullamcorper sodales. Morbi rutrum ultrices nulla, at imperdiet nulla
                tincidunt vitae. Ut consectetur elementum mauris in aliquam. Vestibulum sagittis fermentum mauris,
                suscipit lobortis diam semper vitae. Mauris faucibus lectus pharetra odio fermentum tempor. Integer
                tempus nec nunc at interdum. Quisque vulputate sem quis purus tempus euismod ut non leo.</p>
            </div>
          </div>
        </div>

        <div class="col-md-3" role="complementary">
          <scrollSpy-index-render
            [scrollSpyIndexRenderOptions]="{id: 'home', spyId: 'window', topMargin: 90}"
            [scrollSpyAffix]="{topMargin: 70, bottomMargin: 70}"
            class="hidden-print hidden-xs hidden-sm">
          </scrollSpy-index-render>
        </div>
      </div>
    </div>

  `,
})
export class HomeComponent {

  public goTo(anchor: string) {
    setTimeout(() => {
      (<any>document).querySelector('#' + anchor).scrollIntoView();
    });
  }

}
