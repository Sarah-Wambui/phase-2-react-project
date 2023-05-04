import React , {useState, useEffect}from 'react';
import ArticleItem from './ArticleItem';
import NewArticleForm from './NewArticleForm';

function ArticleList() {
  const [articles, setArticles] =useState([])
  console.log(articles)

  const fetchedArticles = ()=>{
  fetch("http://localhost:3000/articles")
  .then(r => r.json())
  .then(articles => setArticles(articles))
  }

 useEffect(()=>{
  fetchedArticles()
 },[])

 function addArticles (newArticles) {
   setArticles ([...articles, newArticles]) 
 }

 function deleteArticle(id){
  fetch(`http://localhost:3000/articles/${id}`,{
    method: "DELETE",
  })
  .then(resp => resp.json())
  .then(() =>{
    const updatedArticles= articles.filter((article)=> article.id !== id)
    setArticles(updatedArticles)
  })
 }

 function updateAuthor(id){
  fetch(`http://localhost:3000/articles/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      author: "Thank you for reading my article"
    })
  })
  .then(resp => resp.json())
  .then(updatedArticle =>{
    const updatedArticles = articles.map((article)=>{
      if(article.id === updatedArticle.id) return updatedArticle
      return article
    })
    setArticles(updatedArticles)
  })
 }

  const arts= articles.map((article,index) =>
<ArticleItem key={index} name={article.name} title={article.title} image={article.image} description={article.description} content={article.content} id={article.id} author={article.author} deleteArticle={deleteArticle} updateAuthor={updateAuthor}/>
  )

  return (
    <div className="art" >
      <NewArticleForm  addArticles= {addArticles}/>
      <div>
        <div className="arts" >
        {arts}
        </div>
      </div>
         
    </div>
  )
}
export default ArticleList