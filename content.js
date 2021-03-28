console.log("hellow world");

const getContact = () => {
  // title="Angel fashion 22😍"

  let className = "YmixP fKfSX";

  let div1 = document.getElementsByClassName(className)[0].innerHTML;

  //   let x = div.split("<span title=")[1];

  let y = div1.split("<span title=")[1].split(", You</span>")[0];

  //   if()
  //   const x = !!span && span.parentElement?.parentElement.innerHTML;
  console.log({ y: y.slice(1).split(", ") });

  const data = y
    .slice(1)
    .split(", ")
    .map((number, i) => {
      return {
        name: `babu${i}`,
        number: number,
      };
    });

  console.log(JSON.stringify(data));
};

setTimeout(() => {
  getContact();
}, 20000);
