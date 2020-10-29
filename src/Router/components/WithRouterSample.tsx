import React, { ReactElement } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

function WithRouterSample({
  location,
  match,
  history,
}: RouteComponentProps): ReactElement {
  return (
    <div>
      <h4>location</h4>
      <textarea
        value={JSON.stringify(location, null, 2)}
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)}
        rows={7}
        readOnly={true}
      />
      <button onClick={() => history.push('/router')}>홈으로</button>
    </div>
  );
}

export default withRouter(WithRouterSample);
