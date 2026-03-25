import 'dotenv/config'
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from '@prisma/client'
import { questions as q1 } from '../data/testy/s/sukromna-bezpecnost-okruh-1'
import { questions as q2 } from '../data/testy/s/sukromna-bezpecnost-okruh-2'
import { questions as q3 } from '../data/testy/s/sukromna-bezpecnost-okruh-3'
import { questions as q4 } from '../data/testy/s/sukromna-bezpecnost-okruh-4'
import { questions as qPriestupky } from '../data/testy/s/priestupkove-pravo'
import { questions as qTrestne } from '../data/testy/s/trestne-pravo'
import { questions as qUstava } from '../data/testy/s/ustava-sr'
import { questions as qKriminalistika } from '../data/testy/s/kriminalistika'
import { questions as qPolicajny } from '../data/testy/s/policajny-zbor'
import { questions as qObecnaPolicia } from '../data/testy/s/obecna-policia'
import { questions as qVojenskaPolicia } from '../data/testy/s/vojenska-policia'
import { questions as qOchranaUdajov } from '../data/testy/s/ochrana-osobnych-udajov'
import { questions as qSIS } from '../data/testy/s/slovenska-informacna-sluzba'
import { questions as qPrakticke } from '../data/testy/s/prakticke-otazky'
import { questions as qPOkruh1 } from '../data/testy/p/okruh-1'
import { questions as qPOkruh2 } from '../data/testy/p/okruh-2'
import { questions as qPOkruh3 } from '../data/testy/p/okruh-3'
import { questions as qPOkruh4 } from '../data/testy/p/okruh-4'

const adapter = new PrismaPg({ connectionString: process.env.DIRECT_URL })
const prisma = new PrismaClient({ adapter })

type Answer = 'A' | 'B' | 'C'

type LocalQuestion = {
  id: number
  text: string
  options: { A: string; B: string; C: string }
  correct: Answer
}

function toAnswers(q: LocalQuestion) {
  return [
    { text: q.options.A, isCorrect: q.correct === 'A' },
    { text: q.options.B, isCorrect: q.correct === 'B' },
    { text: q.options.C, isCorrect: q.correct === 'C' },
  ]
}

function toQuestionsData(questions: LocalQuestion[]) {
  return questions.map(q => ({
    text: q.text,
    answers: { create: toAnswers(q) },
  }))
}

function calcPassScore(passMark: number, total: number): number {
  return Math.round((passMark / total) * 100)
}

async function main() {
  console.log('Začínam seed...')

  await prisma.answer.deleteMany()
  await prisma.question.deleteMany()
  await prisma.testResult.deleteMany()
  await prisma.progress.deleteMany()
  await prisma.test.deleteMany()
  await prisma.enrollment.deleteMany()
  await prisma.lesson.deleteMany()
  await prisma.course.deleteMany()
  console.log('Existujúce dáta vymazané')

  // Kurz Typ S
  const courseS = await prisma.course.create({
    data: {
      title: 'Preukaz SBS - Typ S',
      description: 'Príprava na skúšku odbornej spôsobilosti pre preukaz typu S',
      type: 'S',
      tests: {
        create: [
          {
            title: 'Súkromná bezpečnosť - Okruh 1',
            passScore: calcPassScore(20, 25),
            questions: { create: toQuestionsData(q1) },
          },
          {
            title: 'Súkromná bezpečnosť - Okruh 2',
            passScore: calcPassScore(20, 25),
            questions: { create: toQuestionsData(q2) },
          },
          {
            title: 'Súkromná bezpečnosť - Okruh 3',
            passScore: calcPassScore(20, 25),
            questions: { create: toQuestionsData(q3) },
          },
          {
            title: 'Súkromná bezpečnosť - Okruh 4',
            passScore: calcPassScore(20, 25),
            questions: { create: toQuestionsData(q4) },
          },
          {
            title: 'Priestupkové právo',
            passScore: calcPassScore(8, 10),
            questions: { create: toQuestionsData(qPriestupky) },
          },
          {
            title: 'Trestné právo',
            passScore: calcPassScore(22, 27),
            questions: { create: toQuestionsData(qTrestne) },
          },
          {
            title: 'Ústava SR a ZĽPS',
            passScore: calcPassScore(10, 12),
            questions: { create: toQuestionsData(qUstava) },
          },
          {
            title: 'Kriminalistika',
            passScore: calcPassScore(10, 13),
            questions: { create: toQuestionsData(qKriminalistika) },
          },
          {
            title: 'Policajný zbor',
            passScore: calcPassScore(12, 15),
            questions: { create: toQuestionsData(qPolicajny) },
          },
          {
            title: 'Obecná polícia',
            passScore: calcPassScore(7, 9),
            questions: { create: toQuestionsData(qObecnaPolicia) },
          },
          {
            title: 'Vojenská polícia',
            passScore: calcPassScore(4, 5),
            questions: { create: toQuestionsData(qVojenskaPolicia) },
          },
          {
            title: 'Ochrana osobných údajov',
            passScore: calcPassScore(6, 7),
            questions: { create: toQuestionsData(qOchranaUdajov) },
          },
          {
            title: 'Slovenská informačná služba',
            passScore: calcPassScore(2, 2),
            questions: { create: toQuestionsData(qSIS) },
          },
          {
            title: 'Praktické otázky SBS',
            passScore: calcPassScore(8, 10),
            questions: { create: toQuestionsData(qPrakticke) },
          },
        ],
      },
    },
  })
  console.log(`Kurz vytvorený: ${courseS.title}`)

  // Kurz Typ P
  const courseP = await prisma.course.create({
    data: {
      title: 'Preukaz SBS - Typ P',
      description: 'Príprava na skúšku odbornej spôsobilosti pre preukaz typu P',
      type: 'P',
      tests: {
        create: [
          {
            title: 'P - Okruh 1',
            passScore: calcPassScore(36, 40),
            questions: { create: toQuestionsData(qPOkruh1) },
          },
          {
            title: 'P - Okruh 2',
            passScore: calcPassScore(36, 40),
            questions: { create: toQuestionsData(qPOkruh2) },
          },
          {
            title: 'P - Okruh 3',
            passScore: calcPassScore(36, 40),
            questions: { create: toQuestionsData(qPOkruh3) },
          },
          {
            title: 'P - Okruh 4',
            passScore: calcPassScore(36, 40),
            questions: { create: toQuestionsData(qPOkruh4) },
          },
        ],
      },
    },
  })
  console.log(`Kurz vytvorený: ${courseP.title}`)

  console.log('Seed úspešne dokončený!')
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
