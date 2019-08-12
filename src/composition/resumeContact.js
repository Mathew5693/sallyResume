import React from 'react';

function Contact(){
    return(
      <div className="contactInfo">

      <header>
      <h1>Sally's Resume</h1>
      <h2>Contact Information</h2>
      </header>

      <h3>Name</h3>
      <p>Sally McSallyface</p>
      <h3>Email</h3>
      <h4><address><a href="mailto:SallyMCSallyface@mailingmailers.com?subject=About your  resume!" target={"_blank"}>SallyMcSallyface@mailingmailers.com</a></address></h4>
      <h3>Phone Number</h3>
      <h4>555-123-4567</h4>
      <img src={"https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg"} alt="My, Sally!!"></img>

    </div>
    );
}

export default Contact;