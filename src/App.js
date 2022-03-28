import logo from './logo.svg';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Tab, Row, ListGroup, Col, Card, Button, Form, InputGroup, FormControl, Accordion } from 'react-bootstrap'
import WomemSpeakingSvg from './womem-speaking.svg'

function App() {
  return (
    <div className="App">
      <Header />
      <section className='first-content'>
        <div className='content'>
          <div className='overlay-text'>
            <div className='jap-text'>
              <h1 >日本語コース</h1>
              <h2  >
                ブラジルで最高の日本語コースがついにインターネットに登場しました！
              </h2>
            </div>
            <div className='ptbr-text'>
              <h1>Japonês Online</h1>
              <h2>
                O melhor curso de japones do Brasil finalmente chegou a internet!
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className='description' id='course'>
        <h3>Olá! Aqui é a sua nova professora!</h3>
        <div className='description-text'>
          <div className='speach-bubble'>
            <p className='bubble bubble-bottom-left'>
              Donec rutrum cursus auctor. Etiam at iaculis nulla. Nulla enim nisl, aliquet quis leo ut, tristique iaculis turpis. Ut blandit sollicitudin porttitor. Aenean vitae nisi at nulla scelerisque elementum. Praesent dui lacus, posuere non massa ut, posuere lacinia urna. Nunc ut mi accumsan, fringilla sem et, ornare felis. Aenean interdum, urna pulvinar lacinia venenatis, elit eros scelerisque erat, sit amet iaculis velit diam iaculis metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel iaculis sapien, non tincidunt ligula. Suspendisse rutrum, est eget fermentum condimentum, nulla tortor commodo risus, vel feugiat turpis est eget magna. Quisque efficitur nec nisl quis convallis.
            </p>
          </div>
          <div className='svg-womem-speaking'>
            <img src={WomemSpeakingSvg} alt='Representante da Japonês Online'></img>
            <small>Instrutora e CEO da Japonês Online</small>
          </div>
        </div>
      </section>
      <hr />
      <section className='learn-course margin' id='steps'>
        <h3>O que irei aprender?</h3>
        <div className='div-learn'>
          <Tab.Container defaultActiveKey="#ler">
            <Row>
              <Col sm={3}>
                <ListGroup>
                  <ListGroup.Item action href="#ler">
                    Aprender a Ler
                  </ListGroup.Item>
                  <ListGroup.Item action href="#escrever">
                    Aprender a Escrever
                  </ListGroup.Item>
                  <ListGroup.Item action href="#compreender">
                    Aprender a Compreender
                  </ListGroup.Item>
                  <ListGroup.Item action href="#falar">
                    Aprender a Falar
                  </ListGroup.Item>
                </ListGroup>
              </Col>

              <Col sm={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="#ler">
                    <h4>Aprender a Ler</h4>
                    Donec scelerisque posuere maximus. Sed ornare lectus a ante varius, in suscipit eros facilisis. Etiam in ligula dictum orci vestibulum aliquam. Cras accumsan tellus et massa porta, viverra molestie diam dignissim. Phasellus nec fringilla nisi. Integer nec sapien malesuada, consequat risus sit amet, ullamcorper elit. Sed dapibus, elit non sodales aliquam, dui dolor eleifend odio, et interdum augue turpis quis risus. Suspendisse euismod mattis mauris, vitae faucibus metus volutpat quis. Duis hendrerit sodales justo id tristique. Sed rhoncus arcu quis neque pellentesque convallis.
                    <ol>
                      <li>Modo aprendizado 1</li>
                      <li>Modo aprendizado 2</li>
                      <li>Modo aprendizado 3</li>
                      <li>Modo aprendizado 4</li>
                      <li>Modo aprendizado 5</li>
                    </ol>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#escrever">
                    <h4>Aprender a Escrever</h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    <ol>
                      <li>Modo aprendizado 1</li>
                      <li>Modo aprendizado 2</li>
                      <li>Modo aprendizado 3</li>
                      <li>Modo aprendizado 4</li>
                      <li>Modo aprendizado 5</li>
                    </ol>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#compreender">
                    <h4>Aprender a Compreender</h4>
                    Nullam suscipit sodales euismod. Proin commodo, metus at accumsan auctor, velit nisi posuere lectus, suscipit pellentesque ante nisl at risus. Vestibulum scelerisque velit libero, vel ultricies elit fringilla ut. Duis convallis aliquet volutpat. Fusce egestas elit eget lacus ornare iaculis. In sodales porta diam. Etiam ullamcorper auctor nulla sit amet blandit. Sed scelerisque congue sapien, at vulputate tortor varius vel. Suspendisse nec risus vel odio placerat placerat. Ut id eros ac est molestie condimentum feugiat in nisl. Donec leo neque, interdum in cursus sit amet, pretium a diam.
                    <ol>
                      <li>Modo aprendizado 1</li>
                      <li>Modo aprendizado 2</li>
                      <li>Modo aprendizado 3</li>
                      <li>Modo aprendizado 4</li>
                      <li>Modo aprendizado 5</li>
                    </ol>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#falar">
                    <h4>Aprender a Falar</h4>
                    Mauris hendrerit felis et eros tempor pellentesque. Suspendisse metus ipsum, interdum vitae urna sit amet, tristique fermentum ligula. Ut non tortor et ex laoreet pharetra. Phasellus tortor ligula, sollicitudin consequat mi ac, varius pretium dui. Nunc nec nunc et leo porta condimentum. Sed quis neque in lorem lobortis fermentum. Donec scelerisque nisl orci, et accumsan ante volutpat sed. Vestibulum et ante elementum, luctus magna eu, posuere ligula. Aliquam pellentesque orci sed massa consequat, eget tempus sapien bibendum.
                    <ol>
                      <li>Modo aprendizado 1</li>
                      <li>Modo aprendizado 2</li>
                      <li>Modo aprendizado 3</li>
                      <li>Modo aprendizado 4</li>
                      <li>Modo aprendizado 5</li>
                    </ol>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
      <hr id='prices' />
      <section className='prices'>
        <div>
          <h3>Preço dos Planos</h3>
        </div>

        <div className='div-prices'>
          <Card style={{ width: '20rem' }}>
            <Card.Header as="h5">Plano Básico</Card.Header>
            <Card.Body>
              <Card.Title>R$ 49,90 / <small>mês</small></Card.Title>
              <Card.Text>
                Tenha acesso ao conteudo base.
              </Card.Text>
              <Card.Text>
                + Aulas novas semanalmente.
              </Card.Text>
              <Button variant="primary">Saber Mais</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Header as="h5">Plano Standard</Card.Header>
            <Card.Body>
              <Card.Title>R$ 59,90 / <small>mês</small></Card.Title>
              <Card.Text>
                Contem grande parte do material.
              </Card.Text>
              <Card.Text>
                + Vídeos para treinar sua compreensão.
              </Card.Text>
              <Button variant="primary">Saber Mais</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '20rem' }}>
            <Card.Header as="h5">Plano Premium</Card.Header>
            <Card.Body>
              <Card.Title>R$ 89,90 / <small>mês</small></Card.Title>
              <Card.Text>
                Todo o conteudo já lançado está aqui!
              </Card.Text>
              <Card.Text>
                + Suporte de professores, 24 horas nos 7 dias da semana.
              </Card.Text>
              <Button variant="primary">Saber Mais</Button>
            </Card.Body>
          </Card>
        </div>
      </section>
      <section className='email-input'>
        <h3>Quer receber um Ebook e comecar a estudar agora?</h3>
        <p>Informe o seu email e enviaremos um ebook com tudo que é preciso para começar a aprender!</p>
        <div className='form-input-email'>
          <Form>
            <Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                  Email
                </Form.Label>
                <InputGroup className="mb-2">
                  <InputGroup.Text>@</InputGroup.Text>
                  <FormControl id="inlineFormInputGroup" placeholder="Email" />
                </InputGroup>
              </Col>
              <Col xs="auto">
                <Button type="submit" className="mb-2">
                  Receber Ebook
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </section>
      <section className='questions-answers'>
        <h3>Perguntas e Respostas</h3>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Quanto tempo estudando eu preciso para aprender?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Preciso saber o alfabeto japônes antes de fazer o curso?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Pergunta #3?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Pergunta #4?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Pergunta #5?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Pergunta #6?</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>
      </section>
      <Footer />
    </div>
  );
}

export default App;
