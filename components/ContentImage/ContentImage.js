'use client'

import { SectionContainer } from "@components/Section";
import { Icon } from "@iconify/react";
import { v4 as uuid } from "uuid";

const ContentImageData = [
    {
        id: uuid(),
        title: "As principais causas das mudanças climáticas são:",
        content:
            "Emissões de gases de efeito estufa (GEE): Atividades humanas, como queima de combustíveis fósseis (carvão, petróleo, gás natural) e desmatamento, liberam dióxido de carbono (CO2), metano (CH4) e outros gases que retêm calor na atmosfera, levando ao aquecimento global. <br/>Mudanças no uso da terra: Desmatamento, urbanização e práticas agrícolas intensivas também alteram a composição da atmosfera e podem influenciar os padrões climáticos.",
        align: "right",
        image: "https://apiapp.sualuz.com.br/wp/wp-content/uploads/2023/01/chris-leboutillier-TUJud0AWAPI-unsplash-1024x683.jpg"
    },
    {
        id: uuid(),
        title: "Impactos:",
        content:
            `<p>Aumento da temperatura: Provoca eventos climáticos extremos mais frequentes e intensos, como ondas de calor, tempestades e secas prolongadas. Derretimento das calotas polares e geleiras: Isso leva ao aumento do nível do mar, ameaçando áreas costeiras e ilhas baixas. <br /> Alterações nos ecossistemas: Mudanças na temperatura e padrões de precipitação podem perturbar habitats naturais, levando à extinção de espécies e alterando a distribuição de plantas e animais. <br /> Riscos para a saúde humana: O aumento das temperaturas pode levar a um aumento das doenças relacionadas ao calor, disseminação de doenças transmitidas por vetores(como malária e dengue) e poluição do ar.</p>`,
        align: "left",
        image: "https://f.i.uol.com.br/fotografia/2022/02/23/16456576236216be175c7db_1645657623_3x2_md.jpg"
    }
];

export const ContentImage = () => {
    return (
        <SectionContainer className="process-items mt-16 space-y-16">
            {ContentImageData.map((item) => (
                <div
                    id={item.id}
                    key={item.id}
                    className="process-item--container grid md:grid-cols-2 gap-y-8"
                >
                    <div
                        className={`process-item--image rounded-3xl overflow-hidden ${item.align === "left" ? "md:order-1" : ""
                            }`}
                    >
                        <img
                            src={item.image}
                            width={512}
                            height={512}
                            objectFit="cover"
                            alt="Process Banner 1"
                            className="drop-shadow-xl w-full offset-y-0 offset-x-8 blur-16"
                        />
                    </div>
                    <div
                        className={`process-item--content ${item.align === "left"
                            ? "md:pr-16 lg:pr-24 xl:pr-32 ml-auto"
                            : "md:pl-16 lg:pl-24 xl:pl-32  mr-auto"
                            } my-auto content text-black/60`}
                    >
                        <h3 className="mb-6 h4 md:h3 font-semibold text-black">
                            {item.title}
                        </h3>
                        <p dangerouslySetInnerHTML={{__html: item.content}}></p>
                        <ul className="process-item--list space-y-3">
                            {item.listItems?.length &&
                                item.listItems.map((listItem) => (
                                    <li
                                        id={listItem.id}
                                        key={listItem.id}
                                        className="inline-grid grid-flow-col-dense"
                                    >
                                        <Icon
                                            icon="ph:seal-check-bold"
                                            className="w-6 h-6 text-secondary-500 mr-2"
                                        />
                                        {listItem.content}
                                    </li>
                                ))}
                        </ul>
                    </div>
                </div>
            ))}
        </SectionContainer>
    );
};
