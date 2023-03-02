import React, { useState, useEffect} from 'react'
import {Container, Button, Form} from 'react-bootstrap'
import { v4 } from 'uuid'
import { ItemList } from '../components/ItemList'

const FAKE_DB = 'ManageDatabase.db'
let k = 0;

export function ManageDatabase() {

  //Prepare States
  const [item, setItem] = useState('')
  const [count, setCount] = useState('')
  const [items, setItems] = useState([])

  useEffect(() => {
    const storedItems = localStorage.getItem(FAKE_DB);
    if (storedItems) setItems(JSON.parse(storedItems))
  }, [])

  useEffect(() => {
    localStorage.setItem(FAKE_DB, JSON.stringify(items));
  }, [items])

  function handleItemSubmit(){
    setItems(prevItems => {
      console.log(prevItems)
      return [...prevItems, {'key': v4(), 'item': item, 'count': count}]
    });
    clearForm();
  } 
  
  function clearForm(){
    setItem('')
    setCount('')
  }

  
  function handleItemUpdateCount(key, newCount){
    setItems(items => {
      items[items.map((item) => {return item.key}).indexOf(key)].count = newCount;
      k++%2==0?setItem(''):setItem(' ')
      return items;
    })
  }

  function handleItemRemove(key){
    setItems(items => {
      return [...items].filter((item) => { return item.key !== key });
    })
  }


  return (
    <>
      <Container className='container-sm border rounded p-5 my-5'>
        <Form className='container form-new-part' onSubmit={(e) => {
          handleItemSubmit();
          e.preventDefault();
        }}>
          <Container className='row'>
            <Container>
              <h1>Items Table</h1>
            </Container>
            
            <Container className='col-8'>
              <fieldset id="form-name">
                <label className="form-label" htmlFor="item">Item Name:</label>
                <input className="form-control" type="text" required id="item" item="item" value={item} onChange={(e) => setItem(e.currentTarget.value)} />
              </fieldset>
            </Container>

            <Container className='col-4'>
              <fieldset id="form-count">
                <label className="form-label" htmlFor="count">Total Available:</label>
                <input className="form-control" type="number" required min="1" step="1" id="count" name="count" value={count} onChange={(e) => setCount(e.currentTarget.value)} />
              </fieldset>
            </Container>

            <Container>
              <Button variant="primary" className='my-3' type="submit">Add the Item</Button>
            </Container>

          </Container>
        </Form>
        
      </Container>
      <Container>
        <ItemList items={items} handleItemRemove={handleItemRemove} handleItemUpdateCount={handleItemUpdateCount}></ItemList>
      </Container>
    </>
  )
}
