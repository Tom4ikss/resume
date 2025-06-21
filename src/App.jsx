import './App.css'
import CopySnackbarComponent from './CopySnackbarComponent'
import useScrollAndSelection from './useScrollAndSelection'



function App() {

  const {ref: contactsRef, scrollToAndSelect: scrollToContacts} = useScrollAndSelection()

  return (
    <>
    <div className="selection:bg-sky-200 selection:text-cyan-900 font-normal min-h-screen bg-gray-950 p-6 md:p-12 sofia-script)">
      
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-2xl p-8 md:p-16 shadow-[0px_0px_25px_3px_rgba(49,65,88,0.5)]">
        <h1 className="text-4xl font-bold text-blue-100 mb-4">Шаов Артем</h1>
        <p className="text-lg text-blue-200 mb-8">Junior Web Developer</p>
        <section className="mb-10 rounded-xl p-6 transition duration-500 bg-white hover:inset-shadow-sm hover:inset-shadow-gray-900 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Контакты</h2>
          <ul className="text-gray-700 space-y-2">
            <CopySnackbarComponent text={'tom4iksharf@gmail.com'}>
              <li className="max-w-fit cursor-pointer hover:text-cyan-700 transition-colors duration-200"><a target="_blank" rel="noopener noreferrer" href='https://mail.yandex.ru/'>Email: tom4iksharf@gmail.com</a></li>
            </CopySnackbarComponent>
            <CopySnackbarComponent text={'89275670579'}>
              <li className="max-w-fit cursor-pointer hover:text-cyan-700 transition-colors duration-200">Телефон: +7 (927) 567-05-79</li>
            </CopySnackbarComponent>
            <li ref={contactsRef} className="max-w-fit cursor-pointer hover:text-cyan-700 transition-colors duration-200"><a target="_blank" rel="noopener noreferrer" href='https://github.com/Tom4ikss'>GitHub: github.com/Tom4ikss</a></li>
            <CopySnackbarComponent text={'@tomkss'}>
              <li className="max-w-fit cursor-pointer hover:text-cyan-700 transition-colors duration-200">Telegram: @tomkss</li>
            </CopySnackbarComponent>
          </ul>
        </section>

        <section className="mb-10 bg-white rounded-xl p-6 transition duration-500 hover:inset-shadow-sm hover:inset-shadow-gray-900">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Обо мне</h2>
          <p className="whitespace-pre-line sofia-sans text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
            Я - начинающий Web-разработчик с хорошей теоретической базой и практическим опытом. Я создаю веб-приложений используя Typescript, CSS, React или Vue.<br/><br/>
            Я быстро осваиваю новые инструменты и технологии, умею находить и использовать нужные ресурсы для решения задач, не боюсь задавать вопросы, стремлюсь писать чистый и понятный код, создавать гибкую и расширяемую архитектуру. В работе ценю внимание к деталям, структурированность и коммуникацию.<br/><br/>

            Моя главная цель - это профессиональный рост, а также развитие в других сферах IT (в том числе я имею опыт программирования на Rust, Python, NASM). Меня вдохновляет идея работать в команде, где можно не только развиваться, но и приносить реальную пользу.<br/><br/>
              
            Сейчас ищу возможность присоединиться к команде, где смогу расти как разработчик, перенимать знания от более опытных коллег и принимать участие в создании серьезных проектов.
          </p>
        </section>

        <section className="mb-10 bg-white rounded-xl p-6 transition duration-500  hover:inset-shadow-sm hover:inset-shadow-gray-900">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Навыки</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            {['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'CSS Frameworks', 'REST API', 'Redux', 'LESS', 'SOAP', 'Express.js', 'Vite', 'HTTP/HTTPS'].map(skill => (
              <span
                key={skill}
                className="bg-slide-hover text-slide-hover duration-300 transition bg-white rounded-xl px-3 py-2 text-center hover:text-sky-800 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-10 bg-white rounded-xl p-6 transition duration-500  hover:inset-shadow-sm hover:inset-shadow-gray-900">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Опыт работы</h2>
          <div className="space-y-6">
            Весь опыт работы, который у меня был - это различные проекты, которые я делал для изучения новых технологий и подкрепления имеющихся теоретичиских навыков практикой, часть из них есть на GitHub (<span className='whitespace-nowrap group cursor-pointer text-cyan-700 transition-all duration-300 ease-in-out' onClick={scrollToContacts} role='button'><span className="bg-left-bottom bg-gradient-to-r from-cyan-700 to-cyan-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">см. Контакты</span></span>)
          </div>
        </section>

        <section className="hover:bg-indigo-50 rounded-xl p-4 bg-white rounded-xl p-6 transition duration-500  hover:inset-shadow-sm hover:inset-shadow-gray-900">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Образование</h2>
          <p className="text-gray-700">Бакалавриат, Информационная безопасность, <a className="group cursor-pointer text-cyan-700 transition-all duration-300 ease-in-out" target="_blank" rel="noopener noreferrer" href='https://www.fa.ru/'><span className="bg-left-bottom bg-gradient-to-r from-cyan-700 to-cyan-700 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Финансовый Университет</span></a>, 2024–2029</p>
        </section>

        <footer className="text-blue-200 mb-8 mt-6">* Если вы смотрите это резюме в pdf лучше откройте его по <a className="group cursor-pointer text-cyan-600 transition-all duration-300 ease-in-out" href="https://tom4ikss.github.io/resume/"><span className="bg-left-bottom bg-gradient-to-r from-cyan-600 to-cyan-600 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">ссылке</span></a>.</footer>
      </div>
    </div>
    </>
  )
}

export default App
