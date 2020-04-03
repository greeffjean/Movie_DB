
/*Search Film Database*/
const Filmdatabase = {
    search(term) {
        const api_Key = 'd52d352bec334444651872872e2946e1';
      const access_Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJkMzUyYmVjMzM0NDQ0NjUxODcyODcyZTI5NDZlMSIsInN1YiI6IjVkY2E2NjFlOTkyNTljNjdiMjdkYTIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dcLZDhOtiDoPe-DdjCCH_0T57JnY2Vo3-KRG3DMy1aY';
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_Key}&query=${term}` ,{
          headers: {
              Authorization: `Bearer ${access_Token}`
            }
      }).then(response => {
          return response.json();
      })
      },

      /*Search Genre*/
      generateGenreString(){
        const api_Key = 'd52d352bec334444651872872e2946e1';
        const access_Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJkMzUyYmVjMzM0NDQ0NjUxODcyODcyZTI5NDZlMSIsInN1YiI6IjVkY2E2NjFlOTkyNTljNjdiMjdkYTIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dcLZDhOtiDoPe-DdjCCH_0T57JnY2Vo3-KRG3DMy1aY';
          return fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${api_Key}&language=en-US` ,{
            headers: {
                Authorization: `Bearer ${access_Token}`
              }
        }).then(response => {
            return response.json();
        })
      },

      /*Search Language*/
      generateLanguageStrings(){
        const api_Key = 'd52d352bec334444651872872e2946e1';
        const access_Token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNTJkMzUyYmVjMzM0NDQ0NjUxODcyODcyZTI5NDZlMSIsInN1YiI6IjVkY2E2NjFlOTkyNTljNjdiMjdkYTIxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dcLZDhOtiDoPe-DdjCCH_0T57JnY2Vo3-KRG3DMy1aY';
          return fetch(`https://api.themoviedb.org/3/configuration/languages?api_key=${api_Key}` ,{
            headers: {
                Authorization: `Bearer ${access_Token}`
              }
        }).then(response => {
            return response.json();
        })

      }
}



export default Filmdatabase