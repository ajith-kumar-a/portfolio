// Show Menu

const showMenu = (toggleId,navId) =>{
	const toggle = document.getElementById(toggleId),
			nav =  document.getElementById(navId)

	if(toggle && nav){
		toggle.addEventListener('click',() =>{
			nav.classList.toggle('show')
			});
		}
	}


showMenu('nav_toggle','nav_menu')

// Active & Remove Active
const navLink = document.querySelectorAll('.nav_link')
	navLink.forEach(n => n.classList.remove('active'))


function linkAction() {
	navLink.forEach(n => n.classList.remove('active'))
	this.classList.add('active')

	const navMenu = document.getElementById('nav_menu')
	navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

 var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          status.style.color="lime";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
              status.style.color="red";
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form";
              status.style.color="red";
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
        status.style.color="red";
      });
    }
    form.addEventListener("submit", handleSubmit)



	

const downloadLinks = document.querySelectorAll("[data-download]");

	downloadLinks.forEach(button => {
		const id =button.dataset.download;
		const image = document.getElementById(id);
		const a = document.createElement("a");

		a.href = image.src;
		a.download = "";
		a.style.display="none";

		button.addEventListener("click",() => {
			document.body.appendChild(a);
			a.click();
			document.body.removeChild(a);
		});

	});