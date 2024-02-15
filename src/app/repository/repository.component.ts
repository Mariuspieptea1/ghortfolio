import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Repository } from '../repository';
import { GithubService } from '../github.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {
  repos$: Observable<Repository[]> | undefined;

  constructor(private githubService: GithubService) {
  }

  ngOnInit(): void {
    this.repos$ = this.githubService.getRepos().pipe(
      map(repos => repos.filter(repo => !repo.fork))
    );
  }
}
