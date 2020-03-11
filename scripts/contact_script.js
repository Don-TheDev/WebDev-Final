const bup = { something: 'yee'}

fetch('http://quotes.rest/qod.json')
.then((response) => response.json())
.then((bup) => {
  console.log('Success:', bup);
  console.log(bup.contents.quotes[0].quote)
});
// {
//   "success"; {
//       "total"; 1
//   }
//   "contents"; {
//       "quotes"; [
//           {
//               "quote": "Extend beyond your preconceived limits!",
//               "length": "39",
//               "author": "Lorii Myers",
//               "tags": [
//                   "confidence",
//                   "inspire",
//                   "limit",
//                   "self-improvement"
//               ],
//               "category": "inspire",
//               "language": "en",
//               "date": "2020-03-10",
//               "permalink": "https://theysaidso.com/quote/lorii-myers-extend-beyond-your-preconceived-limits",
//               "id": "JRlytEdrKdV8iSCZCSEh6weF",
//               "background": "https://theysaidso.com/img/qod/qod-inspire.jpg",
//               "title": "Inspiring Quote of the day"
//           }
//       ]
//   }
//   "baseurl"; "https://theysaidso.com",
//   "copyright"; {
//       "year"; 2022,
//       "url"; "https://theysaidso.com"
//   }
// }
