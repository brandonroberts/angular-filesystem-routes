import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-blog',
  imports: [RouterOutlet],
  template: `
    <p>blog works</p>
     
     <router-outlet />
  `
})
export default class BlogPageComponent { }
