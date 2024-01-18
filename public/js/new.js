const postHandler = async function (event) {
  event.preventDefault()
  const name = document.querySelector('input[name="post-title"]');
  const description = document.querySelector('textarea[name="post-body"]');



  await fetch(`/api/posts`,{
    method: "POST",
    body: JSON.stringify({
     name: name.value,
     description: description.value
    }),
    headers: {'Content-Type': 'application/json'},

  })
  document.location.replace('/dashboard')
}
document.querySelector('#new-post-form').addEventListener('submit', postHandler);