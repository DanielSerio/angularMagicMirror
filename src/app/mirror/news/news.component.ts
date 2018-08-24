import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  data = {

    "status": "ok",
    "totalResults": 20,

    "articles": [
      {
        "source": {
          "id": "cnn",
          "name": "CNN"
        },
        "author": "Kara Scannell, Evan Perez and Veronica Stracqualursi, CNN",
        "title": "Top Trump Organization official Weisselberg was granted immunity in Cohen investigation",
        "description": "A top figure in President Donald Trump's orbit was granted immunity in the investigation into hush money payments made to two women who alleged they had affairs with Trump, a sources familiar with the matter told CNN Friday.",
        "url": "https://www.cnn.com/2018/08/24/politics/allenweisselbergimmunitycoheninvestigation/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/180824110948allenweisselbergfilesupertease.jpg",
        "publishedAt": "20180824T17:19:00Z"
      },

      {

        "source": {
          "id": "thenewyorktimes",
          "name": "The New York Times"
        },
        "author": "Jess Bidgood",
        "title": "Hurricane Lane Live Updates: New Threat as Wind Drives Brush Fire on Maui",
        "description": "Hawaii was girding for a long and dangerous brush with Hurricane Lane, whose outer bands have already unleashed torrential rain and surging floodwaters.",
        "url": "https://www.nytimes.com/2018/08/24/us/hawaiihurricanelaneupdates.html",
        "urlToImage": "https://static01.nyt.com/images/2018/08/25/us/25hawaii01/25hawaii01facebookJumbo.jpg",
        "publishedAt": "20180824T17:07:00Z"
      }

    ]

  };

  constructor() { }

  ngOnInit() {
  }

}
