import {Accordion, AccordionItem, AccordionTrigger, AccordionContent} from "~/components/ui/accordion";

type FaqItem = {
    id: number;
    title: string;
    answer: string;
}

const FaqArr: FaqItem[] = [
    {id: 1, title: 'Звідки можна дізнатися, чи мають ваші вироби сертифікації безпеки?', answer: 'В нашому магазині ми продаємо тільки вейп-продукцію, яка пройшла відповідні сертифікації безпеки. Щоб отримати додаткову інформацію про сертифікації конкретних виробів, звертайтеся до нашого персоналу.'},
    {id: 2, title: 'Чи можна заряджати вейп від будь-якого USB-порту?', answer: 'Ні, рекомендується заряджати вейп лише від відповідних джерел живлення, таких як зарядний пристрій, призначений для вейпінгу. Використання несумісних джерел живлення може призвести до несправностей або навіть небезпеки.'},
    {id: 3, title: 'Як часто потрібно чистити вейп?', answer: 'Регулярна очистка вейпу є важливою для забезпечення його правильної роботи і тривалості. Рекомендується очищати його щонайменше один раз на тиждень. Це включає очищення бака, де зберігається рідина, і видалення будь-яких залишків. Також, слід періодично промивати дрібні частини, такі як дрип-тип або кришка.'},
    {id: 4, title: 'Чи є у вейпів гарантія?', answer: 'Більшість виробників вейпів надають обмежену гарантію на свої вироби. Тривалість та умови гарантії можуть відрізнятися залежно від виробника та конкретної моделі. Детальну інформацію про гарантію ви можете знайти в документації, що постачається разом із виробом або звернутися до нашого персоналу для консультації.'},
    {id: 5, title: 'Як правильно зберігати вейп під час подорожі?', answer: 'Вейп краще зберігати в захисному чохлі або кейсі, щоб запобігти пошкодженням і витіканню рідини.'},
]

export const loader = async () => {
    return null;
};

export default function Faq(){
    return (
            <div style={{ height: "100vh" }} className="h-full flex justify-center items-center">
                <div className='w-1/2' >
                    <h1 className="text-5xl text-center">FAQ</h1>
                    <div className='mt-2' >
                        <Accordion type="single" collapsible>
                            {
                                FaqArr.map((item: FaqItem) => (
                                    <AccordionItem className='p-2' key={item.id} value={`item-${item.id}`}>
                                        <AccordionTrigger>{item.title}</AccordionTrigger>
                                        <AccordionContent>{item.answer}</AccordionContent>
                                    </AccordionItem>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
    )
}