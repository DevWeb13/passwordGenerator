// @ts-nocheck
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é\"'(-è_çà)=+-*/.~#{[|`\\^@]}€^¨$£ê*µù%!§:;,<>?";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

generateButton.addEventListener("click", generatePassword);

/**
 * Génére un mot de passe aléatoire en fonction des critères choisis et le copie dans le presse papier
 *
 * @return  {void}  Mot de passe aléatoire copié dans le presse papier
 */
function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez selectionner des critères");
    return;
  }

  for (let i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;

  passwordOutput.select();
  copyToClickBoard();
}
/**
 * Copie le mot de passe généré dans le presse papier et modifie le texte du bouton pendant un temps prédéfini
 *
 * @return  {void} Mot de passe copié dans le presse papier et modifie le texte du bouton
 */
function copyToClickBoard() {
  var content = document.getElementById("password-output").value;
  console.log(content);
  navigator.clipboard
    .writeText(content)
    .then(() => {
      generateButton.textContent = "Copié !";
      setTimeout(() => {
        generateButton.textContent = "Générer un mot de passe";
      }, 2000);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}
