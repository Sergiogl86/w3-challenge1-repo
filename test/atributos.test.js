import Atributos from "../src/Atributos";

debugger;

describe("Given a class Atributos", () => {
  describe("When we have as imputs father html element (section), name atribute (color), value of this atribute (blue)", () => {
    test("Then it should return a <li> element with text color: blue", () => {
      const inputFather = document.createElement("div");
      inputFather.innerHTML = `<div class="character__overlay">
                <ul class="list-unstyled">
                  
                </ul>
                <div class="character__actions">
                  <button class="character__action btn">habla</button>
                  <button class="character__action btn">muere</button>
                </div>
              </div>`;

      const inputNameAtribute = "color";
      const inputValueAtribute = "blue";

      const expected = "color: blue";

      const AtributosOut = new Atributos(
        inputFather,
        inputNameAtribute,
        inputValueAtribute
      );

      const result = inputFather
        .querySelector(".character__overlay")
        .getElementsByTagName("li")[0].innerHTML;

      expect(result).toBe(expected);
    });
  });
});
