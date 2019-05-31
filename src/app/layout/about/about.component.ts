import { Component, OnInit, Optional } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ConstantsService } from 'src/app/core/services/constants.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { Observable } from 'rxjs';
import { IConfigOptions } from 'src/app/core/interfaces/config-options.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  configOption: IConfigOptions;
  generatedSequence: string;

  constructor(
    @Optional() private localStorageService: LocalStorageService,
    private configOptionsService: ConfigOptionsService,
    private constantsService: ConstantsService,
    private generatorService: GeneratorService,
  ) { }

  ngOnInit() {

    this.generatedSequence = this.generatorService.generateSequesnce();

    this.configOption = {
      id: 0,
      login: ''
    };

    this.configOptionsService.getConfigOptions().subscribe(x =>
      this.configOption = { ...x }
    );
  }

  createConfigOption() {
    this.configOptionsService.setConfigOptions(this.configOption);
  }
}
