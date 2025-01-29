import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import githubService from '../services/githubService';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  gallery: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    justifyItems: 'center',
    alignItems: 'center',
    paddingTop: '20px',
    [theme.breakpoints.down('lg')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },
  searchInput: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  searchButton: {
    padding: '10px 15px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginLeft: '10px',
  },
}));

const RepositoryCard = ({ repo }) => {
  return (
    <motion.div
      className="border p-4 rounded-lg shadow-md bg-white transform transition hover:scale-105 hover:shadow-xl"
      initial={{ opacity: 0,  y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl font-bold">{repo.name}</h2>
      <p>{repo.description || 'Sem descrição disponível.'}</p>
      <div className="mt-2">
        <span className="text-sm bg-gray-200 px-2 py-1 rounded">
          {repo.language || 'Não especificado'}
        </span>
        <span className="ml-2 text-sm">⭐ {repo.stargazers_count}</span>
      </div>
      <a
        href={repo.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 mt-2 inline-block"
      >
        Ver no GitHub
      </a>
    </motion.div>
  );
};

const RepositoryList = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchUser, setSearchUser] = useState('Fr-Vinicius');
  const [inputUser, setInputUser] = useState('');
  const classes = useStyles();

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const data = await githubService.getRepositories(searchUser);
        setRepos(data);
      } catch (error) {
        console.error('Erro ao buscar repositórios:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [searchUser]);

  const handleSearchUser = () => {
    setSearchUser(inputUser);
  };

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={classes.container}>
      <h1 className="text-3xl font-bold mb-4">Repositórios de {searchUser}</h1>
      <input
        type="text"
        placeholder="Buscar repositório"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={classes.searchInput}
      />
      <div>
        <input
          type="text"
          placeholder="Buscar repositórios de outro usuário"
          value={inputUser}
          onChange={(e) => setInputUser(e.target.value)}
          className={classes.searchInput}
        />
        <button onClick={handleSearchUser} className={classes.searchButton}>Pesquisar</button>
      </div>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <motion.div 
          className={classes.gallery}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {filteredRepos.map((repo) => (
            <RepositoryCard key={repo.id} repo={repo} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default RepositoryList;
