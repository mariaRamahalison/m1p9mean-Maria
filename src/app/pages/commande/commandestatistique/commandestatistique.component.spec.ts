import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandestatistiqueComponent } from './commandestatistique.component';

describe('CommandestatistiqueComponent', () => {
  let component: CommandestatistiqueComponent;
  let fixture: ComponentFixture<CommandestatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandestatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandestatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
