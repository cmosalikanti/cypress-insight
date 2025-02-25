import SliderPage from '../../page-objects/slider-page';

describe('Slider Tests', () => {
  const sliderPage = new SliderPage();

  beforeEach(() => {
    cy.visit('/horizontal_slider');
  });

  it('should verify the slider exists on the page', () => {
    sliderPage.verifySliderExists();
  });

  it('should set the slider value', () => {
    sliderPage.moveSliderToValue(3.5);
    sliderPage.verifySliderValue('3.5');
  });

  it('should change the slider value and verify the change', () => {
    const initialValue = '0';
    const newValue = '4';

    sliderPage.verifySliderValue(initialValue);
    sliderPage.moveSliderToValue(newValue);
    sliderPage.verifySliderValue(newValue);
  });

  it('should verify the slider value updates dynamically with the value displayed', () => {
    const value = '2.5';

    sliderPage.moveSliderToValue(value);
    sliderPage.verifySliderValue(value);
  });
});
