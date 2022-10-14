import {Component, Input, OnInit} from '@angular/core';
import {LogoService} from "./logo.service";

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {



  constructor() {}

  @Input('logoType') type : string = ''
  @Input('logoHeight') height : string = '100px'

  ngOnInit(): void {
  }

  setLogoPath (type:string) : string{
    let logoType : string;
    let logoPath : string;
    logoType = type;
    switch (logoType) {
      case 'logo-full':
        logoPath = 'assets/img/logo/logo-full.png'
        return logoPath
      case 'logo-typo':
        logoPath = 'assets/img/logo/logo-typo.png'
        return logoPath
      case 'logo-symbol':
        logoPath = 'assets/img/logo/logo-symbol.png'
        return logoPath
      default :
        logoPath = 'assets/img/logo/logo-symbol.png'
        return logoPath
    }

  }

}



