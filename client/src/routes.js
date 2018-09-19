import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainTable from './components/Main_Table';
import PdfTemplate from './components/pdfTemplate'

export const makeMainRoutes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path = "/" component={MainTable} />
          <Route path = "/pdf" component = {PdfTemplate} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
