import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {
  quote = {
    title: '',
    author: ''
  }

  id: string;

  constructor(private quotesService: QuotesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    if(this.id) {
      this.quotesService.getQuote(this.id).subscribe(data => {
        console.log(data);
        this.quote = data;
      })
    }
  }

  onSave(form) {
    console.log(form);
    const data = form.value;
    if(this.id){
      this.quotesService.updateQuote(this.id, data).subscribe(quote => {
        console.log(quote);
        this.router.navigateByUrl('/quotes'); //atualizei ele vai para essa rota
      })
    }else {
      this.quotesService.createQuote(data).subscribe(quote => {
        console.log(quote);
      });
    }
  }

}
