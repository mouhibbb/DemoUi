import { Component } from '@angular/core';
import { BlogComponent } from '../blog/blog.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { PricingComponent } from '../pricing/pricing.component';
import { ServComponent } from '../serv/serv.component';
import { TeamComponent } from '../team/team.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-about-us',
  imports: [ContactComponent,TestimonialsComponent,TeamComponent,ServComponent,PricingComponent,BlogComponent,GalleryComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
