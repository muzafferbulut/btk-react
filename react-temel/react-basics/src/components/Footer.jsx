export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour

  return (
    <>

      {
        isOpen ? (
          <p>Akşam {closeHour}'e kadar sipariş verebilirsiniz </p>
        ) :
          (
            <p>Şu an kapalıyız. Açılış saatimiz {openHour} </p>
          )
      }

    </>
  );
}
