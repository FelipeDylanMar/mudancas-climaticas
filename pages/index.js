import { SectionContainer } from "@components/Section";
import { PageTitle } from "@components/Title";
import { Layout } from "@components/Layout";
import { ContentImage } from "@components/ContentImage";
import { Content } from "@components/Content";
import { MotionBTTContainer } from "@components/Motion";
import SEO from "@components/SEO/SEO";

export default function Home() {
    return (
        <Layout className="">
            <SEO
                title="Mudanças climáticas"
            />
            <div className="main-wrapper bg-[#F3F5F8] relative z-10 pb-20 pt-20 ">
                {/* { Page Banner } */}
                {/* Components Container */}
                <SectionContainer className="components--container wrap wrap-px grid gap-8 sm:gap-24">
                    {/* Features */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="features" className="features">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Mudanças Climáticas
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    Altas temperaturas, secas e espécies em extinção são alguns efeitos de mudanças climáticas no mundo; saiba como as empresas podem exercer papel importante na preservação do planeta.
                                </p>
                            </Content>
                            <ContentImage />
                        </SectionContainer>
                    </MotionBTTContainer>
                    {/* Card Container Tabs */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer className="feature-tabs">
                            <PageTitle
                                className="text-center mx-auto"
                                type="default"
                            >
                                Conclusão
                            </PageTitle>
                            <Content className="text-center" alignment="center">
                                <p>
                                    As mudanças climáticas referem-se a alterações de longo prazo nos padrões médios do clima global ou regional. Isso inclui mudanças nas temperaturas médias, padrões de precipitação, níveis do mar e outros indicadores climáticos ao longo do tempo.
                                    <br />
                                    <br/>
                                    As mudanças climáticas representam um dos maiores desafios enfrentados pela humanidade no século XXI. Requerem ação urgente e coletiva em níveis local, nacional e global para mitigar os impactos adversos e promover um futuro mais sustentável e resiliente para as gerações futuras.
                                </p>
                            </Content>
                        </SectionContainer>
                    </MotionBTTContainer>
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                    </MotionBTTContainer>
                    {/* Accordions */}
                    <MotionBTTContainer
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <SectionContainer id="faq" className="faq">
                        </SectionContainer>
                    </MotionBTTContainer>
                </SectionContainer>
            </div>
        </Layout>
    );
}
