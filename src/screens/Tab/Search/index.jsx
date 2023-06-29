import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Input } from '../../../components/Input';
import * as Styled from './styles';
import api from '../../../services/api';
import { RecentSearch } from '../../../components/RecentSearch';

export default function Search() {
  // const navigation = useNavigation();

  // const handleGoTransfer = () => {
  //   navigation.navigate('Transfer');
  // };
  const [category, setCategory] = useState([]);

  const schema = yup.object({
    search: yup.string().min(4, '* A pesquisa deve conter pelo menos 4 digitos').required('* Informe o que deseja'),
  });

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      search: '',
    },
    resolver: yupResolver(schema),
  });
  async function onSubmit(input) {
    obj = {
      search: input.search,
    };
  }

  async function getCategoria() {
    const response = await api.get(`/categorias/?populate=*`);
    setCategory(response.data.data);
    console.log(category);
  }
  useEffect(() => {
    getCategoria();
  }, []);

  return (
    <Styled.Container>
      <Input 
        title="PESQUISAR"
        name="search"
        placeholder="Pesquise o que deseja"
        control={control}
        errors={errors}
      />

      <Styled.Body>
        <Styled.Category>CATEGORIAS</Styled.Category>
        <TouchableOpacity>
          <Styled.ViewAll>VER TUDO</Styled.ViewAll>
        </TouchableOpacity>
      </Styled.Body>

      <FlatList
        
        data={category}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-around' }}
        renderItem={({ item }) => (
          <Styled.Button>
            <Styled.Title>{item?.attributes.name}</Styled.Title>
          </Styled.Button>
        )}
      />

      <Styled.Body>
        <Styled.Category>RECENTES</Styled.Category>
        <TouchableOpacity>
          <Styled.ViewAll>LIMPAR TUDO</Styled.ViewAll>
        </TouchableOpacity>
      </Styled.Body>
      
      <Styled.Footer>
        <RecentSearch 
          name="FastFood"
        />
        <RecentSearch 
          name="OutBack"
        />
        <RecentSearch 
          name="Habib´s"
        />
        <RecentSearch 
          name="Comida Caseira"
        />
        <RecentSearch 
          name="Coca-Cola 2L"
        />
      </Styled.Footer>
      
    </Styled.Container>
  );
}
