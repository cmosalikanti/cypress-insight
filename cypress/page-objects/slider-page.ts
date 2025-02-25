class SliderPage {
    get slider() {
      return cy.get('input[type="range"]');
    }
  
    get sliderValue() {
      return cy.get('#range');
    }
  
    moveSliderToValue(value) {
      this.slider.invoke('val', value).trigger('change');
    }
  
    focusAndClickSlider() {
      this.slider.click();
    }
  
    verifySliderValue(expectedValue) {
      this.sliderValue.should('have.text', expectedValue);
    }
  
    verifySliderExists() {
      this.slider.should('exist');
    }
  
    verifySliderValueChanged(originalValue, newValue) {
      this.verifySliderValue(originalValue);
      this.moveSliderToValue(newValue);
      this.verifySliderValue(newValue);
    }
  }
  
  export default SliderPage;
  