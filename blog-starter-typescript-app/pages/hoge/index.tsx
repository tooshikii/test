import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

export const BlogEntries = {
  'dog' : [{
    slug : 'dog1',
  },{
    slug : 'dog2',
  },{
    slug : 'dog3',
  },{
    slug : 'dog4',
  }],
  'cat' : [{
    slug : 'cat1',
  },{
    slug : 'cat2',
  },{
    slug : 'cat3',
  },{
    slug : 'cat4',
  }],
}

const ProductPage: NextPage = ({
}) => {

  return (
    <div>
      <div>HOGE</div>
      <div>
        <Link href={'/hoge/dog'}>dog</Link>
      </div>
      <div>
        <Link href={'/hoge/cat'}>cat</Link>
      </div>
    </div>
  );
};

export default ProductPage