export const MENU_LINKS = [
  {
    url: "/",
    title: "Cotizaciones",
  },
  {
    url: "/sobre-stablecoins",
    title: "Sobre Stablecoins",
  },
];

export const MOBILE_MENU_LINKS = [
  {
    url: "/",
    title: "Cotizaciones",
  },
  {
    url: "/sobre-stablecoins",
    title: "Sobre Stablecoins",
  },
  {
    url: "/sobre-stablecoins#dai",
    title: "DAI",
  },
  {
    url: "/sobre-stablecoins#usdc",
    title: "USDC",
  },
  {
    url: "/sobre-stablecoins#usdt",
    title: "USDT",
  },
];

export const ABOUT = (
  <>
    Las stablecoins son un tipo de criptomoneda diseñada para mantener un valor
    estable, en contraste con la volatilidad comúnmente asociada con otras
    criptomonedas como Bitcoin y Ethereum. Estas criptomonedas están respaldadas
    por activos estables, como monedas fiduciarias (por ejemplo, dólares
    estadounidenses, euros, etc.), metales preciosos o incluso otras
    criptomonedas.
    <br />
    <br />
    La estabilidad se logra manteniendo reservas adecuadas de los activos
    respaldados en reserva para respaldar el valor de la stablecoin en
    circulación. Por lo tanto, cada unidad de una stablecoin se supone que tiene
    un valor equivalente al activo subyacente o a una combinación de activos
    subyacentes.
    <br />
    <br />
    Las stablecoins se utilizan comúnmente en el mundo de las criptomonedas para
    facilitar transacciones rápidas y eficientes, así como para proporcionar una
    forma de protegerse contra la volatilidad del mercado de criptomonedas sin
    tener que recurrir a las monedas fiduciarias tradicionales. También son
    útiles para aquellos que desean mantener su valor en un activo digital sin
    verse afectados por los grandes movimientos de precios asociados con otras
    criptomonedas más volátiles.
  </>
);

export const cryptoInfo = [
  {
    title: "DAI",
    url: "dai",
    content: (
      <>
        DAI es una criptomoneda estable descentralizada que está vinculada al
        valor del dólar estadounidense. El valor de un DAI es igual al valor de
        un dólar. Fue desarrollada por MakerDAO, una organización
        descentralizada que opera en la plataforma Ethereum. La estabilidad de
        DAI se mantiene a través de un sistema de contratos inteligentes y
        activos colaterales dentro de la red Ethereum.
        <br />
        <br />
        El proceso funciona de la siguiente manera: los usuarios bloquean
        activos como Ethereum en un contrato inteligente de MakerDAO y reciben
        DAI a cambio. Estos activos bloqueados actúan como garantía, y si el
        valor de DAI cae por debajo de 1 dólar, el sistema puede liquidar
        automáticamente parte de los activos bloqueados para mantener la
        estabilidad del valor de DAI.
        <br />
        <br />
        DAI se utiliza principalmente como una forma de estabilidad dentro del
        ecosistema de las criptomonedas, permitiendo a los usuarios mantener
        valor sin estar expuestos a la volatilidad extrema que a menudo se
        asocia con otras criptomonedas como Bitcoin o Ethereum. Esto hace que
        DAI sea útil para actividades como el comercio, préstamos, remesas y
        más, donde la estabilidad de precios es crucial.
      </>
    ),
  },
  {
    title: "USDC",
    url: "usdc",
    content: (
      <>
        USDC, que significa &quot;USD Coin&quot;, es otra criptomoneda estable
        vinculada al dólar estadounidense. Al igual que DAI, USDC está diseñada
        para mantener un valor estable en relación con el dólar estadounidense,
        pero difiere en algunos aspectos fundamentales. El valor de un USDC es
        igual al valor de un dólar.
        <br />
        <br />
        USDC fue creado a través de una colaboración entre Circle y Coinbase,
        dos empresas prominentes en el espacio de las criptomonedas. A
        diferencia de DAI, que se mantiene mediante un sistema descentralizado
        de contratos inteligentes y colaterales en la red Ethereum, USDC se
        emite y se respalda por reservas de dólares estadounidenses mantenidas
        en cuentas bancarias reguladas y auditadas por terceros. Esto significa
        que la emisión y la circulación de USDC están más centralizadas en
        comparación con DAI.
        <br /> <br />A pesar de estas diferencias en el enfoque técnico, tanto
        DAI como USDC se utilizan ampliamente en el espacio de las criptomonedas
        para proporcionar estabilidad de precios y facilitar transacciones y
        transferencias de valor sin la volatilidad asociada con otras
        criptomonedas más tradicionales como Bitcoin o Ethereum. Los usuarios
        pueden utilizar USDC para una variedad de propósitos, incluidos pagos,
        comercio, préstamos y más, aprovechando la estabilidad del dólar
        estadounidense sin tener que recurrir a sistemas financieros
        tradicionales.
      </>
    ),
  },
  {
    title: "USDT",
    url: "usdt",
    content: (
      <>
        USDT, también conocida como &quot;Tether&quot;, es otra criptomoneda
        estable vinculada al dólar estadounidense. Al igual que DAI y USDC, USDT
        está diseñado para mantener un valor estable en relación con el dólar
        estadounidense. El valor de un USDT es igual al valor de un dólar.
        <br />
        <br />
        Sin embargo, a diferencia de DAI y USDC, que tienen diferentes
        estructuras y enfoques para mantener su estabilidad, USDT se diferencia
        en su método de respaldo. USDT fue el primero en introducir el concepto
        de criptomoneda estable respaldada por activos, y originalmente afirmaba
        estar respaldada por una cantidad equivalente de dólares estadounidenses
        en una cuenta bancaria. Sin embargo, la transparencia y la verificación
        de estas reservas han sido objeto de debate y controversia en el pasado.
        <br />
        <br />
        A pesar de esto, USDT se ha convertido en una de las criptomonedas
        estables más populares y ampliamente utilizadas en el mercado de las
        criptomonedas. Se utiliza en una variedad de casos de uso, incluyendo el
        comercio de criptomonedas en exchanges, como una forma de mantener el
        valor durante períodos de volatilidad del mercado, y para facilitar
        transferencias de valor rápidas y eficientes entre diferentes exchanges
        y billeteras digitales.
        <br />
        <br />
        Es importante tener en cuenta que, debido a la controversia sobre la
        transparencia de las reservas de USDT, algunos usuarios y empresas
        prefieren utilizar otras criptomonedas estables como DAI o USDC, que
        ofrecen un mayor nivel de transparencia y descentralización en sus
        estructuras.
      </>
    ),
  },
];
