import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
student={
 about:" What’s the first page you read when you find a new company and want to learn their story? If you’re like a lot of folks, it’s the company’s about us page.Those pages, usually found in the footer navigation on most business sites, are powerful pieces of an effective website content strategy. However, they’re sometimes overlooked, too.When they’re written well, they can help your company show off its personality, differentiate itself from the competition, and leave a positive impression on potential customers.In simplest terms, it’s a page on your website that explains what your business does.That sounds straightforward enough, right?Sure, it does. But, because of this, they’re occasionally treated like nondescript pieces of content, created to fulfill a requirement on a checklist.That’s selling those pages short, though. Get it right, and they go from a line item no one looks at, to an essential element of telling your company’s story."
}

  constructor() { }

  ngOnInit(): void {
  }

}
