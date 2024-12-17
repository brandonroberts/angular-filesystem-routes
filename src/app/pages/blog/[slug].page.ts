import { Component, input } from "@angular/core";

@Component({
  selector: 'app-blog-post',
  standalone: true,
  template: `
   <p>Blog Post</p>

   {{ slug() }}
 `
})
export default class HomePageComponent {
  slug = input('');
}
