import Container from "@/Components/Container";
import Layout from "@/Layouts/Layouts";
import { Link } from "@inertiajs/react";

export default function BlogDetails(data) {
    return (
        <Layout title={data.slug}>
            <Container>
                {" "}
                <div className="mx-auto max-w-3xl mt-14">
                    {" "}
                    <span className="text-blue-400 uppercase tracking-wider text-sm font-medium">
                        {" "}
                        Courses{" "}
                    </span>{" "}
                    <h1 className="text-4xl lg:text-5xl font-bold lg:tracking-tight mt-1 lg:leading-tight">
                        {" "}
                        Introduction to the Essential Data Structures &amp;
                        Algorithms{" "}
                    </h1>{" "}
                    <div className="flex gap-2 mt-3 items-center flex-wrap md:flex-nowrap">
                        {" "}
                        <span className="text-gray-400">
                            {" "}
                            Marcell Ziemann{" "}
                        </span>{" "}
                        <span className="text-gray-400">•</span>{" "}
                        <time
                            className="text-gray-400"
                            dateTime="2022-11-09T16:39:00.000Z"
                        >
                            {" "}
                            Wed Nov 09 2022{" "}
                        </time>{" "}
                        <span className="text-gray-400 hidden md:block">
                            •
                        </span>{" "}
                        <div className="w-full md:w-auto flex flex-wrap gap-3">
                            {" "}
                            <span className="text-sm text-gray-500">
                                #webdev
                            </span>
                            <span className="text-sm text-gray-500">
                                #tailwindcss
                            </span>
                            <span className="text-sm text-gray-500">
                                #frontend
                            </span>{" "}
                        </div>{" "}
                    </div>{" "}
                </div>{" "}
                <div className="mx-auto prose prose-lg mt-6 max-w-3xl">
                    {" "}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        euismod rutrum, consequat fringilla ultricies nullam
                        curae mollis semper conubia viverra, orci aenean dapibus
                        pharetra nec tortor tellus cubilia. Ullamcorper mi
                        lectus eu malesuada tempor massa praesent magna mattis
                        posuere, lobortis vulputate ut duis magnis parturient
                        habitant nibh id tristique, quis suspendisse donec nisl
                        penatibus sem non feugiat taciti. Mollis per ridiculus
                        integer cursus semper vestibulum fermentum penatibus
                        cubilia blandit scelerisque, tempus platea leo posuere
                        ac pharetra volutpat aliquet euismod id ullamcorper
                        lobortis, urna est magna mus rhoncus massa curae libero
                        praesent eget. Mattis malesuada vestibulum quis ac nam
                        phasellus suscipit facilisis libero diam posuere, cursus
                        massa vehicula neque imperdiet tincidunt dui egestas
                        lacinia mollis aliquet orci, nisl curabitur dapibus
                        litora dis cum nostra montes ligula praesent. Facilisi
                        aliquam convallis molestie tempor blandit ultricies
                        bibendum parturient cubilia quam, porttitor morbi
                        torquent tempus taciti nec faucibus elementum phasellus,
                        quis inceptos vestibulum gravida augue potenti eget nunc
                        maecenas. Tempor facilisis ligula volutpat habitant
                        consequat inceptos orci per potenti blandit platea, mus
                        sapien eget vel libero vestibulum augue cubilia ut
                        ultrices fringilla lectus, imperdiet pellentesque cum
                        ridiculus convallis sollicitudin nisl interdum semper
                        felis.
                    </p>
                    <p>
                        Ornare cum cursus laoreet sagittis nunc fusce posuere
                        per euismod dis vehicula a, semper fames lacus maecenas
                        dictumst pulvinar neque enim non potenti. Torquent hac
                        sociosqu eleifend potenti augue nulla vivamus senectus
                        odio, quisque curabitur enim consequat class sociis
                        feugiat ullamcorper, felis dis imperdiet cubilia commodo
                        sed massa phasellus. Viverra purus mus nisi condimentum
                        dui vehicula facilisis turpis, habitant nascetur lectus
                        tempor quisque habitasse urna scelerisque, nibh nullam
                        vestibulum luctus aenean mollis metus. Suscipit gravida
                        duis nec aliquet natoque molestie a ridiculus
                        scelerisque cum, justo cursus sapien sodales purus
                        dignissim vel facilisi magnis, inceptos rutrum ut
                        integer auctor commodo sollicitudin fames et. Faucibus
                        ligula nibh sagittis mauris auctor posuere habitant,
                        scelerisque phasellus accumsan egestas gravida viverra
                        nam, sed etiam eleifend proin massa dictumst. Porttitor
                        risus luctus per aenean tellus primis fringilla vitae
                        fames lacinia mauris metus, nec pulvinar quisque commodo
                        sodales ac nibh natoque phasellus semper placerat.
                        Lectus aenean potenti leo sollicitudin tristique eros
                        quam ligula, vestibulum diam consequat enim torquent nec
                        tempus, blandit viverra dapibus eleifend dis nunc
                        nascetur.
                    </p>
                    <h2 id="sodales-hendrerit-malesuada-et-vestibulum">
                        Sodales hendrerit malesuada et vestibulum
                    </h2>
                    <ul>
                        <li>
                            <p>Luctus euismod pretium nisi et, est dui enim.</p>
                        </li>
                        <li>
                            <p>
                                Curae eget inceptos malesuada, fermentum class.
                            </p>
                        </li>
                        <li>
                            <p>
                                Porttitor vestibulum aliquam porta feugiat
                                velit, potenti eu placerat.
                            </p>
                        </li>
                        <li>
                            <p>Ligula lacus tempus ac porta, vel litora.</p>
                        </li>
                    </ul>
                    <p>
                        Torquent non nisi lacinia faucibus nibh tortor taciti
                        commodo porttitor, mus hendrerit id leo scelerisque
                        mollis habitasse orci tristique aptent, lacus at
                        molestie cubilia facilisis porta accumsan condimentum.
                        Metus lacus suscipit porttitor integer facilisi
                        torquent, nostra nulla platea at natoque varius
                        venenatis, id quam pharetra aliquam leo. Dictum orci
                        himenaeos quam mi fusce lacinia maecenas ac magna
                        eleifend laoreet, vivamus enim curabitur ullamcorper est
                        ultrices convallis suscipit nascetur. Ornare fames
                        pretium ante ac eget nisi tellus vivamus, convallis
                        mauris sapien imperdiet sollicitudin aliquet taciti
                        quam, lacinia tempor primis magna iaculis at eu. Est
                        facilisi proin risus eleifend orci torquent ultricies
                        platea, quisque nullam vel porttitor euismod sociis non,
                        maecenas sociosqu interdum arcu sed pharetra potenti.
                        Aliquet risus tempus hendrerit sapien tellus eget cursus
                        enim etiam dui, lobortis nostra pellentesque odio
                        posuere morbi ad neque senectus arcu eu, turpis proin ac
                        felis purus fames magnis dis dignissim.
                    </p>
                    <p>
                        Orci volutpat augue viverra scelerisque dictumst ut
                        condimentum vivamus, accumsan cum sem sollicitudin
                        aliquet vehicula porta pretium placerat, malesuada
                        euismod primis cubilia rutrum tempus parturient. Urna
                        mauris in nibh morbi hendrerit vulputate condimentum,
                        iaculis consequat porttitor dui dis euismod eros, arcu
                        elementum venenatis varius lectus nisi. Nibh arcu
                        ultrices semper morbi quam aptent quisque porta posuere
                        iaculis, vestibulum cum vitae primis varius natoque
                        conubia eu. Placerat sociis sagittis sociosqu morbi
                        purus lobortis convallis, bibendum tortor ridiculus orci
                        habitasse viverra dictum, quis rutrum fusce potenti
                        volutpat vehicula. Curae porta inceptos lectus mus urna
                        litora semper aliquam libero rutrum sem dui maecenas
                        ligula quis, eget risus non imperdiet cum morbi magnis
                        suspendisse etiam augue porttitor placerat facilisi
                        hendrerit. Et eleifend eget augue duis fringilla
                        sagittis erat est habitasse commodo tristique quisque
                        pretium, suspendisse imperdiet inceptos mollis blandit
                        magna mus elementum molestie sed vestibulum. Euismod
                        morbi hendrerit suscipit felis ornare libero ligula, mus
                        tortor urna interdum blandit nisi netus posuere, purus
                        fermentum magnis nam primis nulla.
                    </p>
                    <h2 id="elementum-nisi-urna-cursus-nisl-quam-ante-tristique-blandit-ultricies-eget">
                        Elementum nisi urna cursus nisl quam ante tristique
                        blandit ultricies eget
                    </h2>
                    <p>
                        Netus at rutrum taciti vestibulum molestie conubia
                        semper class potenti lobortis, hendrerit donec vitae ad
                        libero natoque parturient litora congue. Torquent
                        rhoncus odio cursus iaculis molestie arcu leo
                        condimentum accumsan, laoreet congue duis libero justo
                        tortor commodo fusce, massa eros hac euismod netus
                        sodales mi magnis. Aenean nullam sollicitudin ad velit
                        nulla venenatis suspendisse iaculis, aliquet senectus
                        mollis aptent fringilla volutpat nascetur, nec urna
                        vehicula lacinia neque augue orci. Suspendisse et
                        eleifend convallis sollicitudin posuere diam turpis
                        gravida congue ultrices, laoreet ultricies dapibus proin
                        facilisis magna class praesent fusce. Mus morbi magnis
                        ultricies sed turpis ultrices tempus tortor bibendum,
                        netus nulla viverra torquent malesuada ridiculus tempor.
                        Parturient sociosqu erat ullamcorper gravida natoque
                        varius, etiam habitant augue praesent per curabitur
                        iaculis, donec pellentesque cursus suscipit aliquet.
                        Congue curae cursus scelerisque pellentesque quis fusce
                        arcu eros dictumst luctus ridiculus nisl viverra, turpis
                        class faucibus phasellus feugiat eleifend fringilla orci
                        tristique habitasse conubia quam. Habitasse montes
                        congue sodales rutrum cras torquent cursus auctor
                        condimentum imperdiet egestas nascetur, platea tincidunt
                        ut sollicitudin purus libero lobortis ad nisi diam quam.
                    </p>
                    <p>
                        Suspendisse et eleifend convallis sollicitudin posuere
                        diam turpis gravida congue ultrices, laoreet ultricies
                        dapibus proin facilisis magna class praesent fusce. Mus
                        morbi magnis ultricies sed turpis ultrices tempus tortor
                        bibendum, netus nulla viverra torquent malesuada
                        ridiculus tempor. Parturient sociosqu erat ullamcorper
                        gravida natoque varius, etiam habitant augue praesent
                        per curabitur iaculis, donec pellentesque cursus
                        suscipit aliquet. Congue curae cursus scelerisque
                        pellentesque quis fusce arcu eros dictumst luctus
                        ridiculus nisl viverra, turpis class faucibus phasellus
                        feugiat eleifend fringilla orci tristique habitasse
                        conubia quam. Habitasse montes congue sodales rutrum
                        cras torquent cursus auctor condimentum imperdiet
                        egestas nascetur.
                    </p>{" "}
                </div>{" "}
                <div className="text-center mt-8">
                    {" "}
                    <Link
                        href="/blog"
                        className="bg-gray-100 px-5 py-3 rounded-md hover:bg-gray-200 transition"
                    >
                        ← Back to Blog
                    </Link>{" "}
                </div>{" "}
            </Container>
        </Layout>
    );
}
