import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PessoaService } from '../../services/pessoa.service';
import { Pessoa } from '../../models/pessoa.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabela-pessoas',
  templateUrl: './tabela-pessoas.component.html',
  styleUrls: ['./tabela-pessoas.component.css'],
  standalone: true, 
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    FormsModule,
    MatTableModule 
  ] 
})
export class TabelaPessoasComponent implements AfterViewInit {
  displayedColumns: string[] = ['cpf', 'nome', 'genero', 'idade', 'endereco', 'municipio', 'estado'];
  dataSource = new MatTableDataSource<Pessoa>([]);
  filterValue = '';

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private pessoaService: PessoaService) {}

  ngAfterViewInit(): void {
    // Atribui o paginator ao dataSource
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  carregarPessoas(): void {
    this.pessoaService.getPessoas().subscribe(pessoas => {
      this.dataSource.data = pessoas;
  
      // Definindo o filtro para buscar somente no nome
      this.dataSource.filterPredicate = (data: Pessoa, filter: string) => {
        return data.nome.toLowerCase().includes(filter);
      };
    });
  }
  

  applyFilter(): void {
    this.dataSource.filter = this.filterValue.trim().toLowerCase();
  }
}
