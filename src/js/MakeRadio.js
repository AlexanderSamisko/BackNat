export default function makeRadio() {
    const desk = document.querySelector(".desk-body");
        const options = document.createElement("div");
        options.className = "options";
        desk.append(options);

        const radioFirst = document.createElement("input");
        radioFirst.setAttribute("type", "radio");
        radioFirst.setAttribute("name", "choice");
        radioFirst.setAttribute("id", "1");
        radioFirst.setAttribute("value", "1");
        radioFirst.setAttribute("checked", true);
        options.append(radioFirst);

        const labelRadioFirst = document.createElement("label");
        labelRadioFirst.setAttribute("for", "1");
        options.append(labelRadioFirst);

        const labelRadioFirstSpan = document.createElement("span");
        labelRadioFirstSpan.textContent= "1";
        labelRadioFirst.append(labelRadioFirstSpan);

        const radioSecond = document.createElement("input");
        radioSecond.setAttribute("type", "radio");
        radioSecond.setAttribute("name", "choice");
        radioSecond.setAttribute("id", "2");
        radioSecond.setAttribute("value", "2");
        options.append(radioSecond);

        const labelRadioSecond = document.createElement("label");
        labelRadioSecond.setAttribute("for", "2");
        options.append(labelRadioSecond);

        const labelRadioSecondSpan = document.createElement("span");
        labelRadioSecondSpan.textContent= "2";
        labelRadioSecond.append(labelRadioSecondSpan);

        const radioThird = document.createElement("input");
        radioThird.setAttribute("type", "radio");
        radioThird.setAttribute("name", "choice");
        radioThird.setAttribute("id", "3");
        radioThird.setAttribute("value", "3");
        options.append(radioThird);

        const labelRadioThird = document.createElement("label");
        labelRadioThird.setAttribute("for", "3");
        options.append(labelRadioThird);

        const labelRadioThirdSpan = document.createElement("span");
        labelRadioThirdSpan.textContent= "3";
        labelRadioThird.append(labelRadioThirdSpan);

        const radioFourth = document.createElement("input");
        radioFourth.setAttribute("type", "radio");
        radioFourth.setAttribute("name", "choice");
        radioFourth.setAttribute("id", "4");
        radioFourth.setAttribute("value", "4");
        options.append(radioFourth);

        const labelRadioFourth = document.createElement("label");
        labelRadioFourth.setAttribute("for", "4");
        options.append(labelRadioFourth);

        const labelRadioFourthSpan = document.createElement("span");
        labelRadioFourthSpan.textContent= "4";
        labelRadioFourth.append(labelRadioFourthSpan);

        const radioFifth = document.createElement("input");
        radioFifth.setAttribute("type", "radio");
        radioFifth.setAttribute("name", "choice");
        radioFifth.setAttribute("id", "5");
        radioFifth.setAttribute("value", "5");
        options.append(radioFifth);

        const labelRadioFifth = document.createElement("label");
        labelRadioFifth.setAttribute("for", "5");
        options.append(labelRadioFifth);

        const labelRadioFifthSpan = document.createElement("span");
        labelRadioFifthSpan.textContent= "5";
        labelRadioFifth.append(labelRadioFifthSpan);

        const radioSixth = document.createElement("input");
        radioSixth.setAttribute("type", "radio");
        radioSixth.setAttribute("name", "choice");
        radioSixth.setAttribute("id", "6");
        radioSixth.setAttribute("value", "6");
        options.append(radioSixth);

        const labelRadioSixth = document.createElement("label");
        labelRadioSixth.setAttribute("for", "6");
        options.append(labelRadioSixth);

        const labelRadioSixthSpan = document.createElement("span");
        labelRadioSixthSpan.textContent= "6";
        labelRadioSixth.append(labelRadioSixthSpan);

        const radioSeventh = document.createElement("input");
        radioSeventh.setAttribute("type", "radio");
        radioSeventh.setAttribute("name", "choice");
        radioSeventh.setAttribute("id", "7");
        radioSeventh.setAttribute("value", "7");
        options.append(radioSeventh);

        const labelRadioSeventh = document.createElement("label");
        labelRadioSeventh.setAttribute("for", "7");
        options.append(labelRadioSeventh);

        const labelRadioSeventhSpan = document.createElement("span");
        labelRadioSeventhSpan.textContent= "7";
        labelRadioSeventh.append(labelRadioSeventhSpan);

        const radioEight = document.createElement("input");
        radioEight.setAttribute("type", "radio");
        radioEight.setAttribute("name", "choice");
        radioEight.setAttribute("id", "8");
        radioEight.setAttribute("value", "8");
        options.append(radioEight);

        const labelRadioEight = document.createElement("label");
        labelRadioEight.setAttribute("for", "8");
        options.append(labelRadioEight);

        const labelRadioEightSpan = document.createElement("span");
        labelRadioEightSpan.textContent= "8";
        labelRadioEight.append(labelRadioEightSpan);

        const radioNinth = document.createElement("input");
        radioNinth.setAttribute("type", "radio");
        radioNinth.setAttribute("name", "choice");
        radioNinth.setAttribute("id", "9");
        radioNinth.setAttribute("value", "9");
        options.append(radioNinth);

        const labelRadioNinth = document.createElement("label");
        labelRadioNinth.setAttribute("for", "9");
        options.append(labelRadioNinth);

        const labelRadioNinthSpan = document.createElement("span");
        labelRadioNinthSpan.textContent= "9";
        labelRadioNinth.append(labelRadioNinthSpan);

        const radioTenth = document.createElement("input");
        radioTenth.setAttribute("type", "radio");
        radioTenth.setAttribute("name", "choice");
        radioTenth.setAttribute("id", "10");
        radioTenth.setAttribute("value", "10");
        options.append(radioTenth);

        const labelRadioTenth = document.createElement("label");
        labelRadioTenth.setAttribute("for", "10");
        options.append(labelRadioTenth);

        const labelRadioTenthSpan = document.createElement("span");
        labelRadioTenthSpan.textContent= "10";
        labelRadioTenth.append(labelRadioTenthSpan);
    
}