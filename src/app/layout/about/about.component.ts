import { Component, OnInit, Optional, Inject } from '@angular/core';
import { ConfigOptionsService } from 'src/app/core/services/config-options.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { IConfigOptions } from 'src/app/core/interfaces/config-options.interface';
import { GeneratedSequence } from 'src/app/core/services/generator.factory';
import { Constants } from 'src/app/core/core.module';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  localStorageService: LocalStorageService;
  configOptionsService: ConfigOptionsService;
  item: string;

  configOption: IConfigOptions;
  generatedSequence: string;

  constructor(
    @Optional() private lsService: LocalStorageService,
    private coService: ConfigOptionsService,
    @Inject(Constants) private constants: any,
    @Inject(GeneratedSequence) private sequence: string
  ) {
    this.localStorageService = lsService;
    this.configOptionsService = coService;
  }

  ngOnInit() {

    this.generatedSequence = this.sequence;

    this.configOption = {
      id: 0,
      login: ''
    };

    this.configOptionsService.getConfigOptions().subscribe(x =>
      this.configOption = { ...x }
    );

    this.localStorageService.getItem().subscribe(x => {
      this.item = x;
    });
  }

  createConfigOption() {
    this.configOptionsService.setConfigOptions(this.configOption);
  }
}
