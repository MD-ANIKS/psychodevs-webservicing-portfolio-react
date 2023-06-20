import React from "react";
import IconButton from '@mui/material/IconButton';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {


  return (
    <footer className="bg-light text-center text-white">
      <div className="container p-4 pb-0">
      <section className="mb-4">
        <IconButton aria-label="facebook" href='https://facebook.com/mashfukurrahman.anik/' target="_blank">
        <FacebookOutlinedIcon style={{color: '#3B5998'}}/>
        </IconButton>
        <IconButton  aria-label="twitter" href='https://twitter.com/MD__ANIK' target="_blank">
        <TwitterIcon style={{color: '#55ACEE'}}/>
        </IconButton>
        <IconButton aria-label="instagram" href='https://www.instagram.com/md_anik.official/' target="_blank">
        <InstagramIcon style={{color: '#cd486b'}}/>
        </IconButton>
        <IconButton aria-label="linkedin" href='https://www.linkedin.com/in/md-anik-programmer/' target="_blank">
        <LinkedInIcon style={{color: '#0082CA'}}/>
        </IconButton>
        <IconButton  aria-label="github" href='https://github.com/MD-ANIKS' target="_blank">
        <GitHubIcon style={{ color: '#333' }}/>
        </IconButton>
      </section>
      </div>

      <div
        className="text-center p-3"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
      >
        © Md.ANIK || All right reserved
      </div>
    </footer>
  );
}
