import { TestBed, inject } from '@angular/core/testing';
import { soundCloudService } from './sound-cloud.service';


describe('Services\soundCloudService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [soundCloudService]
    });
  });

  it('should be created', inject([soundCloudService], (service: soundCloudService) => {
    expect(service).toBeTruthy();
  }));
});
