
/*Search Film Database*/
const Filmdatabase = {
    search(term) {
        const apiKey = 'd52d352bec334444651872872e2946e1';
      const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJkMzUyYmVjMzM0NDQ0NjUxODcyODcyZTI5NDZlMSIsInN1YiI6IjVkY2E2NjFlOTkyNTljNjdiMjdkYTIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dcLZDhOtiDoPe-DdjCCH_0T57JnY2Vo3-KRG3DMy1aY';
        return fetch(`https://api.themoviedb.org/3/search/movie?apiKey=${apiKey}&query=${term}` ,{
          headers: {
              Authorization: `Bearer ${accessToken}`
            }
      }).then(response => {
          return response.json();
      })
      },

      /*Search Genre*/
      generateGenreString(){
        const apiKey = 'd52d352bec334444651872872e2946e1';
        const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJkMzUyYmVjMzM0NDQ0NjUxODcyODcyZTI5NDZlMSIsInN1YiI6IjVkY2E2NjFlOTkyNTljNjdiMjdkYTIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dcLZDhOtiDoPe-DdjCCH_0T57JnY2Vo3-KRG3DMy1aY';
          return fetch(`https://api.themoviedb.org/3/genre/movie/list?apiKey=${apiKey}&language=en-US` ,{
            headers: {
                Authorization: `Bearer ${accessToken}`
              }
        }).then(response => {
            return response.json();
        })
      },

      /*Search Language*/
      generateLanguageStrings(){
        const apiKey = 'd52d352bec334444651872872e2946e1';
        const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJkMzUyYmVjMzM0NDQ0NjUxODcyODcyZTI5NDZlMSIsInN1YiI6IjVkY2E2NjFlOTkyNTljNjdiMjdkYTIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dcLZDhOtiDoPe-DdjCCH_0T57JnY2Vo3-KRG3DMy1aY';
          return fetch(`https://api.themoviedb.org/3/configuration/languages?apiKey=${apiKey}` ,{
            headers: {
                Authorization: `Bearer ${accessToken}`
              }
        }).then(response => {
            return response.json();
        })

      }
}



export default Filmdatabase