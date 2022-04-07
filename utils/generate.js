const arr = [
  "Android Studio",
  "Gradle",
  "Java",
  "Kotlin",
  "Jetpack Compose",
  "RESTful API",
  "Material Design",
  "SQL",
  "Room with Flow",
  "Github",
];

function main() {
  const results = arr.map((item) => {
    return {
      name: item,
      url: "",
      icon: "",
    };
  });
  console.log(results);
}

main();
