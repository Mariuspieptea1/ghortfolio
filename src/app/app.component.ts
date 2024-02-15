import { Component, OnInit } from '@angular/core';
import { GithubService } from './github.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ghortfolio';
  username = 'mariuspieptea1'

  constructor(private githubService: GithubService, private titleService: Title, private meta: Meta) {}

  ngOnInit(): void {
      this.username = this.githubService.username;
      this.titleService.setTitle('Ghortfolio - ' + this.username)
      this.meta.addTags([
        { name: 'description',
      content: `${this.username}'s portfolio`},
      {name: 'author',
    content: this.username}
      ])
  }
}
