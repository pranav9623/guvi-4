const xhr = new XMLHttpRequest();
{
  xhr.open("GET", "https://restcountries.com/v3/all");
  xhr.responseType = "json";

  xhr.onload = () => {
    const blogs = xhr.response;
    // console.log(blogs);
    for (let i = 0; i < blogs.length; i++) {
      console.log(blogs[i].name, blogs[i].region, blogs[i].subregion);
    }
  };
  xhr.send();
}
