import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { HeroDto } from '../../models/hero-dto.model';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { forbiddenNameValidator } from 'src/app/shared/validators/forbidden-name.validators';
import { formCrossValidator } from 'src/app/shared/validators/form-cross.validators';

@Component({
  selector: 'app-hero-add',
  templateUrl: './hero-add.component.html',
  styleUrls: ['./hero-add.component.scss'],
})
export class HeroAddComponent implements OnInit {
  hero!: HeroDto;

  public myForm!: any;

  constructor(private heroSrv: HeroService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.createForm();
  }

  public createForm() {
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), forbiddenNameValidator(/Prova/i)]],
      ability: ['', Validators.required],
    }, {validators: formCrossValidator});
  }

 public  onSubmit() {
    console.log(this.myForm.value);
  }

  get nameForm(){
    return this.myForm.get('name');
  }

  get abilityForm(){
    return this.myForm.get('ability');
  }

  save(){
  const hero: HeroDto = new HeroDto({
    id: this.hero.id,
    name: this.hero.name,
    ability: this.hero.ability
  });

  this.heroSrv.add(hero);
  this.hero.id = '',
  this.hero.name = '',
  this.hero.ability = ''
}

  add(form: any) {
    console.log(form);
  }
}
