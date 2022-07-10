import { Component, OnInit } from '@angular/core';
import { SearchService } from '../service/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  pageNo: string;
  jobs: any = []
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.searchService.search(this.pageNo).subscribe((res)=>{
      console.log(res.results);
      this.jobs=res.results
    })
  }
}
